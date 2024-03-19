import selfie from '../assets/images/me.jpg'

export default function About() {
  return (
    <div>
    <div className="row justify-content-center p-4">
      <h1 className="text-center col-3 pb-3 mb-4 border-bottom border-primary-subtle border-2">About Me</h1>
    </div>
    <div className='d-flex justify-content-center'>
      <img src={selfie} class="rounded-circle" width="150" height="150"alt="A selfie I just took"></img>
    </div>
      <p className="text-center pt-4 col-12">
      I am Nathan Dickinson. I graduated in the year 2022. I currently work at two jobs. My first job is at St. Barnabas and I am the IT assistant. I work on computers and help teachers. I have worked with the network and have done lots of troubleshooting at St.Barnabas. I'd like to think I have a great troubleshooting ability especially in the technology world. My second job is at lowes. I help customers and I work in paint and hardware. I've learned alot being at lowes 
      I've learned proper paining techniques from my older coworkers who love to share their knolwedge and i've learned alot about tools and hardware.
      <br></br>
      In my free time I like to go on hikes or read comics. I have a big collection of comics and even manga. I also love to listen to music and I collect cds. I have my own cd player in my room so I can listen to all my favorite artist like Radiohead. I enjoy surrounding myself with nature
      I enjoy the oceans and I enjoy the mountains. Nature is a very calming place for me jusy listening to the animals or the water flowing. 
      </p>

    </div>
  );
}
