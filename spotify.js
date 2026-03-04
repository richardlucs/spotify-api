export default async function handler(req, res) {
  try {
    const response = await fetch("https://groke.se/twitch/spotify/?254d78a0f93be46993dfd492105dc7ef");
    const text = await response.text();

    res.status(200).json({
      nowPlaying: text
    });

  } catch (error) {
    res.status(500).json({
      error: "Erro ao buscar música"
    });
  }
}
