// public/script.js
document.getElementById('imageForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const prompt = document.getElementById('prompt').value;
  const response = await fetch('/api/openai/generate-image', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
      const data = await response.json();
      const imageUrl = data.url; // Assuming the response contains the URL to the generated image
      document.getElementById('generatedImage').src = imageUrl;
  } else {
      console.error('Error generating image:', response.statusText);
  }
});
