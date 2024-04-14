// Next.js will pick up any JavaScript files stored in there(in api-folder) and turn those files into API routes, so into endpoints that can be targeted by request that should receive JSON and return JSON

// path:   /api/newMeetup

// req = contains data about the incoming request
// res = sending back a response
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // data of incoming request

    // 4 expected field on the incoming req 
    const { title, image, address, description } = data;
  }
}
