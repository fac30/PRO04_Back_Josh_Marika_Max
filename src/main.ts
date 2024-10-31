import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";

import swaggerDocs from "./swagger";

import genericEndpoints from "./routes/genericEndpoints";
import register from "./routes/register";
import login from "./routes/login";
import logout from "./routes/logout";
import checkSession from "./routes/checkSession";
import vinyls from "./routes/vinyls";
import vinylsByCategory from "./routes/vinylsByCategory";
import transactions from "./routes/transactions";
import transactionsByStatus from "./routes/transactionsByStatus";
import shippingOptions from "./routes/shippingOptions";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const sessionSecret = process.env.SESSION_SECRET;

app.use(express.json());

/*const allowedOrigins = [
  "https://localhost:5173",
  "https://localhost:5174",
  "http://pro04cdkstack-sitebucket397a1860-yjssa5llco8j.s3-website.eu-west-2.amazonaws.com",
];*/

app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: sessionSecret as string,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true },
  })
);

swaggerDocs(app);

app.use(genericEndpoints);
app.use(register);
app.use(login);
app.use(logout);
app.use(checkSession);
app.use(vinyls);
app.use(vinylsByCategory);
app.use(transactions);
app.use(transactionsByStatus);
app.use(shippingOptions);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
