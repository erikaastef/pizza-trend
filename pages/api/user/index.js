export default function userHandler() {
    const {
        query: { name, password },
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            res.status(200).json({})
            break
        case 'POST':
            // Create data in your database
            res.status(200).json({})
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}