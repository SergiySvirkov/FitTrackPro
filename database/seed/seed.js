// Import necessary modules and models
const mongoose = require('mongoose');
const User = require('../../server/src/models/User');
const Goal = require('../../server/src/models/Goal');
// Import other models as needed

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/fittrackpro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample user data
const userData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    // Add other user fields as needed
  },
  // Add more user data as needed
];

// Sample goal data
const goalData = [
  {
    userId: '<user_id>', // Replace with the actual user ID
    goalType: 'weight_loss',
    targetValue: 10, // Replace with the target value
    // Add other goal fields as needed
  },
  // Add more goal data as needed
];

// Seed the database with sample data
async function seed() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Goal.deleteMany({});
    // Add other models as needed

    // Seed users
    const users = await User.create(userData);

    // Seed goals
    goalData.forEach(async (goal) => {
      const user = users[0]; // Assuming the first user for simplicity
      goal.userId = user._id;
      await Goal.create(goal);
    });

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Run the seed function
seed();
