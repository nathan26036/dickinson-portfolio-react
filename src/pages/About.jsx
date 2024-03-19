import selfie from '../assets/images/me.jpg'

export default function About() {
  return (
    <div>
    <div className="row justify-content-center p-4">
      <h1 className="text-center col-3 pb-3 mb-4 border-bottom border-primary-subtle border-2">About Me</h1>
    </div>
    <div className='d-flex justify-content-center'>
      <img src={selfie} class="rounded-circle" width="300" height="300"alt="A selfie I just took"></img>
      <p className="text-center col-10">
      I am Nathan Dickinson. I graduated in the year 2022. I currently work at two jobs. My first job is at St. Barnabas and I am the IT assistant. I work on computers and help teachers. My second job is at lowes. I help customers and I work in paint and hardware.
      In my free time I like to play video games and read comics. I have a big collection of comics and even manga. I also love to listen to music and I collect cds. I have my own cd player in my room so i can listen to all my favorite artist like Radiohead.
      </p>
    </div>
    </div>
  );
}
