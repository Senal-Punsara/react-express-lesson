import User from "../models/UserModel.js"
import bcrypt from "bcryptjs"


export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
   

    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10); // Generate a salt
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the generated salt

        // Create a new user with the hashed password
        const newUser = await User.createUser({name, email, hashedPassword, role});
        res.status(200).json({ email: email, user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
};



export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findUserByUsername(email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        return res.json({ id: user.user_id, useremail: user.email, role:user.role });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
};
