document.getElementById('getMemeButton').addEventListener('click', function () {
  fetch('https://api.imgflip.com/get_memes') 
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
        console.log(data)
        function getRandomMeme() {
          const randomIndex = Math.floor(Math.random() * data.data.memes.length);
          console.log(randomIndex);
          return data.data.memes[randomIndex].url;
        }

        const randomMemeUrl = getRandomMeme();
        console.log(randomMemeUrl)
        document.getElementById('memeContainer').innerHTML = `<img src="${randomMemeUrl}" alt="Random Meme">`;
    })
});