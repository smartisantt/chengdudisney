export function tablecloth(word) {
  console.log(
    `%c${word}`,
    `padding: 10px 40px;
    color: #008c8c;
    font-size: 24px;
    font-weight: 600;
    border-radius: 10px;
    background-color:white;
    background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),
    linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);
    background-size:50px 50px;`
  )
}