const router = require('express').Router();
const User = require('../models/User');
const Mood = require('../models/Mood');
const attachColor = require('../functions/color');
// Middleware
function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;

  if (!isAuthenticated) return res.redirect('/login');

  next();
}

function findMaxProperty(objectData, objectProperties) {
  let maxNumber = -Infinity;
  let maxProperty = null;

  for (const prop of objectProperties) {
    if (objectData[prop] > maxNumber) {
      maxNumber = objectData[prop];
      maxProperty = prop;
    }
  }

  return { property: maxProperty, number: maxNumber };
}


// Login page
router.get('/login', (req, res) => {
  if (req.session.user_id) return res.redirect('/mood');

  res.render('login', {
    isLogin: true
  });
});

// Homepage
router.get('/', (req, res) => {
  if (req.session.user_id) return res.redirect('/entry');

  res.render('index', {
    isHome: true,
    isLoggedIn: req.session.user_id
  });
});

// Register Page
router.get('/register', (req, res) => {
  res.render('register', {
    isRegister: true
  });
});

router.get('/mood', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: Mood
    });

    const moods = user.moods.map(mood => {
      const plainMood = mood.get({ plain: true });
      const moodDisplay = returnResult(plainMood);

      return { ...plainMood, moodDisplay };
    });

    console.log("These are the moods: ", moods);

    res.render("mood", {
      email: user.email,
      entry: moods // Pass the moods data
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

//specific mood page
router.get('/mood/:id', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: Mood
    });

    const moodId = req.params.id; // Get the mood ID from the URL parameter
    const mood = await Mood.findOne({
      where: {
        id: moodId,
        userId: user.id
      },
      raw: true
    }); // Find the specific mood by ID associated with the user

    if (!mood) {
      // Handle the case if the mood is not found
      return res.status(404).send('Mood not found');
    }

    const moodDisplay = returnResult(mood);
    console.log(mood);
    const color = attachColor(moodDisplay);
    res.render('display', {
      email: user.email,
      entry: { ...mood, color } // Pass the single mood object with moodDisplay
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send('An error occurred');
  }
});



router.get('/entry', isAuthenticated, async (req, res) => {
  const user = await User.findByPk(req.session.user_id);

  res.render('entry', {
    email: user.email
  });
});

function returnResult(data) {
  const searchCriteria = ['joy', 'sadness', 'fear', 'anger', 'surprise', 'disgust'];
  const maxResult = findMaxProperty(data, searchCriteria);

  console.log(maxResult);
  return maxResult;
}

module.exports = router;