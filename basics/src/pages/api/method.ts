export default function method(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      method: req.method,
    });
  } else {
    res.status(200).json({
      id: 999,
      method: req.method,
    });
  }
}
