import React from 'react' 
import Image1 from '../Imgs/img.1'
import Image2 from '../Imgs/img.2'
import Image3 from '../Imgs/img.3'
import Image4 from '../Imgs/img.4.jpg'
import Image5 from '../Imgs/img.5.jpg'
import Image6 from '../Imgs/img.6.jpg'
import '../Styless/History.css'


function History() {
 

    return (
      <div className="history ">
        <p className="display-1  mt-4 mb-4">HISTORY</p>
        <p className='para'>
            According to author J. J. Roy Burman, Banjaras have settled across
            Rajasthan and other parts of India. Together with the Bhopa, Domba
            and Kalbelia, they are sometimes called the "Gypsies of India".
            Professor D. B. Naik says that, "There are so many cultural
            similarities in the Roma Gypsies and the Banjara Lambanis". Author
            B. G. Halbar says that, Most of nomadic communities believe that
            they are descended from Rajput ancestry. All these nomadic tribal
            groups who claim Rajput ancestry says that during the time of Mughal
            domination they were retreated to the forests and vowed to return
            only when the foreign influence had gone. B. G. Halbar says they
            appear to be of mixed ethnicity, possibly originating in
            north-central India. However, Habib notes that their constituent
            groups may not in fact share a common origin, with the theories that
            suggest otherwise reflecting the systemic bias of nineteenth-century
            British ethnographers who were keen to create simple
            classifications. Laxman Satya notes that "Their status as Banjaras
            was circumscribed by the colonial state disregarding the rich
            diversity that existed among various groups". Although not referred
            to as Banjara until the sixteenth century, Habib believes that the
            royal court chroniclers Ziauddin Barani and Shaikh Nasiruddin
            documented them operating in the Delhi Sultanate some centuries
            earlier, around the time of the rule of Alauddin Khalji. Halbar
            dates things earlier, suggesting that Dandin, a Sanskrit writer who
            lived in the sixth century, refers to them but, again, not by name.
          </p>
          <br />
          <div className='Image mb-5 mt-2'>
            <img src={Image1} alt="" />
            <img src={Image2} alt=""  />
            <img src={Image6} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
            <img src={Image3} alt="" />
            </div>
            <a href="https://en.wikipedia.org/wiki/Banjara#History" className='a1'>Load More</a><br />
            <br /><br />
      </div>
    );
  }
  
  export default History;
  