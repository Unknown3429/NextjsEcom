
export default function handler(req, res) {
    let pin = {
        "110042":["Delhi", "Delhi"],
        "110089":["Rohini", "Delhi"]
    }
    res.status(200).json(pin)
}