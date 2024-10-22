import express from 'express';
import cors from 'cors';
import genericEndpoints from './routes/genericEndpoints';
import registerRoutes from './routes/register';
import loginRoutes from './routes/login';
import checkSessionRoutes from './routes/checkSession';
import vinylRoutes from './routes/vinyls';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Use the routes
app.use(genericEndpoints);
app.use(registerRoutes);
app.use(loginRoutes);
app.use(checkSessionRoutes);
app.use(vinylRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };