import { verifyPassword } from "../services/session.service.js";

export async function getSession(req, res, next) {
  try {
    if (req.session.isAuth) {
      return res.json({ isAuth: true });
    }
    res.json({ isAuth: false });
  } catch (err) {
    next(err);
  }
}

export async function createSession(req, res, next) {
  try {
    const { password } = req.body;
    const isvalidPassword = await verifyPassword(password);

    if (!isvalidPassword) {
      return res.sendStatus(401);
    }

    req.session.isAuth = true;
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export async function deleteSession(req, res, next) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500);
    }
    res.clearCookie("sessionId");
    res.status(204).send();
  });
}
