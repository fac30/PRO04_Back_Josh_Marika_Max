import express from 'express';
import cors from 'cors';
import genericEndpoints from './routes/genericEndpoints';
import register from './routes/register';
import login from './routes/login';
import logout from './routes/logout';
import checkSession from './routes/checkSession';
import vinyls from './routes/vinyls';
import transactions from './routes/transactions';
import shippingOptions from './routes/shippingOptions';
import vinylsByCategory from './routes/vinylsByCategory';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(genericEndpoints);
app.use(register);
app.use(login);
app.use(logout);
app.use(checkSession);
app.use(vinyls);
app.use(vinylsByCategory);
app.use(transactions);
app.use(shippingOptions);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };