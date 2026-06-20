let orders = [];

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      orders
    });
  }

  if (req.method === "POST") {
    const body = req.body || {};

    const order = {
      id: Date.now(),
      chain: body.chain || "",
      branch: body.branch || "",
      city: body.city || "",
      status: "new",
      pallets: 0,
      createdAt: new Date().toISOString()
    };

    orders.push(order);

    return res.status(200).json({
      ok: true,
      order
    });
  }

  return res.status(405).json({ ok: false });
}
