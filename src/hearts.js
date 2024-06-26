export function hearts(word) {
  console.log(
    `%c${word}`,
    `padding: 10px 40px;
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    border-radius: 10px;
    background:
    radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%),
    radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%),
    radial-gradient(circle closest-side at 42% 22%, #d35 43%, rgba(221,51,85,0) 45%),
    radial-gradient(circle closest-side at 58% 22%, #d35 43%, rgba(221,51,85,0) 45%),
    radial-gradient(circle closest-side at 50% 35%, #d35 32%, rgba(221,51,85,0) 27%),
    radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
    radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
    radial-gradient(circle closest-side at 40% 22%, #d35 40%, rgba(221,51,85,0) 45%) 52px 50px,
    radial-gradient(circle closest-side at 60% 22%, #d35 40%, rgba(221,51,85,0) 45%) 48px 50px,
    radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 37%) 50px 50px;
    background-color:#b03;
    background-size:100px 100px;`
  );
}
