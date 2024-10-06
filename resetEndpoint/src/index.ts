import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

interface GenerateOtpRequest {
  email: string;
}

const otpStore: Record<string, string> = {};

app.post('/generate-otp', (req: Request<{}, {}, GenerateOtpRequest>, res: Response) => {
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  // rest of your code...
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
