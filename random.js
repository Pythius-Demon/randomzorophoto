export default function handler(req, res) {
  const images = [
    "https://files.catbox.moe/abcd12.png",
    "https://files.catbox.moe/efgh34.jpg",
    "https://files.catbox.moe/ijkl56.png"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  res.writeHead(302, {
    Location: randomImage,
    'Cache-Control': 'no-store' // ensures Discord fetches fresh each time
  });
  res.end();
}
