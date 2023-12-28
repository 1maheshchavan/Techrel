import React from 'react';
import zylog from '../Images/imgCompanies/zylog.jpg';
import zensar from '../Images/imgCompanies/zensar.jpg';
import yash from '../Images/imgCompanies/yash.jpg';
import xpanxion from '../Images/imgCompanies/xpanxion.jpg';
import xintne from '../Images/imgCompanies/xintne.jpg';
import wns from '../Images/imgCompanies/wns.jpg';
import wipro from '../Images/imgCompanies/wipro.jpg';
import unisys from '../Images/imgCompanies/unisys.jpg';
import unisyss from '../Images/imgCompanies/unisyss.jpg';
import tibc from '../Images/imgCompanies/tibc.jpg';
import techmahindra from '../Images/imgCompanies/techmahindra.jpg';
import syne from '../Images/imgCompanies/syne.jpg';
import sourcehov from '../Images/imgCompanies/sourcehov.jpg';
import saba from '../Images/imgCompanies/saba.jpg';
import rms from '../Images/imgCompanies/rms.jpg';
import quinnox from '../Images/imgCompanies/quinnox.jpg';
import quickstar from '../Images/imgCompanies/quickstar.jpg';
import quickheal from '../Images/imgCompanies/quickheal.jpg';
import q3 from '../Images/imgCompanies/q3.jpg';
import ptc from '../Images/imgCompanies/ptc.jpg';
import principal from '../Images/imgCompanies/principal.jpg';
import polaris from '../Images/imgCompanies/polaris.jpg';
import newCompany from '../Images/imgCompanies/new.jpg';
import netapp from '../Images/imgCompanies/netapp.jpg';
import logitech from '../Images/imgCompanies/logitech.jpg';
import lion from '../Images/imgCompanies/lion.jpg';
import line from '../Images/imgCompanies/line.jpg';
import icertis from '../Images/imgCompanies/icertis.jpg';
import ibm from '../Images/imgCompanies/ibm.jpg';
import hp from '../Images/imgCompanies/hp.jpg';
import geometric from '../Images/imgCompanies/geometric.jpg';
import gate from '../Images/imgCompanies/gate.jpg';
import fis from '../Images/imgCompanies/fis.jpg';
import first from '../Images/imgCompanies/first.jpg';
import fidelity from '../Images/imgCompanies/fidelity.jpg';
import emerson from '../Images/imgCompanies/emerson.jpg';
import emc from '../Images/imgCompanies/emc.jpg';
import elicoo from '../Images/imgCompanies/elicoo.jpg';
import elico from '../Images/imgCompanies/elico.jpg';
import eclerx from '../Images/imgCompanies/eclerx.jpg';
import dtech from '../Images/imgCompanies/dtech.jpg';
import download21 from '../Images/imgCompanies/download (21).webp';
import download22 from '../Images/imgCompanies/download (22).webp';
import download23 from '../Images/imgCompanies/download (23).webp';
import cybage from '../Images/imgCompanies/cybage.jpg';
import collabra from '../Images/imgCompanies/collabra.jpg';
import cognizant from '../Images/imgCompanies/cognizant.jpg';
import capgiming from '../Images/imgCompanies/capgiming.jpg';
import bitwisw from '../Images/imgCompanies/bitwisw.webp';
import bitwise from '../Images/imgCompanies/bitwise.jpg';
import aveva from '../Images/imgCompanies/aveva.jpg';
import aloha from '../Images/imgCompanies/aloha.jpg';
import splm from '../Images/imgCompanies/3splm.jpg';
import wnss from '../Images/imgCompanies/wns.jpg';
import wipros from '../Images/imgCompanies/wipro.jpg';
import unisysss from '../Images/imgCompanies/unisys.jpg';
import tibcs from '../Images/imgCompanies/tibc.jpg';
import techmahindras from '../Images/imgCompanies/techmahindra.jpg';
import tas from '../Images/imgCompanies/tata.jpg';
import synes from '../Images/imgCompanies/syne.jpg';
import sourcehovs from '../Images/imgCompanies/sourcehov.jpg';
import sabas from '../Images/imgCompanies/saba.jpg';
import rmss from '../Images/imgCompanies/rms.jpg';
import quinnoxs from '../Images/imgCompanies/quinnox.jpg';
import quickstars from '../Images/imgCompanies/quickstar.jpg';
import quickheals from '../Images/imgCompanies/quickheal.jpg';
import q3s from '../Images/imgCompanies/q3.jpg';
import ptcs from '../Images/imgCompanies/ptc.jpg';
import principals from '../Images/imgCompanies/principal.jpg';
import polariss from '../Images/imgCompanies/polaris.jpg';
import news from '../Images/imgCompanies/new.jpg';
import netapps from '../Images/imgCompanies/netapp.jpg';
import logitechs from '../Images/imgCompanies/logitech.jpg';
import lions from '../Images/imgCompanies/lion.jpg';
import lines from '../Images/imgCompanies/line.jpg';
import icertiss from '../Images/imgCompanies/icertis.jpg';
import ibms from '../Images/imgCompanies/ibm.jpg';
import hps from '../Images/imgCompanies/hp.jpg';
import geometrics from '../Images/imgCompanies/geometric.jpg';


function Companies() {
    const companyLogos = [zylog, zensar, yash, xpanxion, xintne, wns, wipro, unisys, unisyss, tibc, techmahindra, syne, sourcehov, saba, rms, quinnox, quickstar, quickheal, q3, ptc, principal, polaris, newCompany, netapp, logitech, lion, line, icertis, ibm, hp, geometric, gate, fis, first, fidelity, emerson, emc, elicoo, elico, eclerx, dtech, download21, download22, download23, cybage, collabra, cognizant, capgiming, bitwisw, bitwise, aveva, aloha, splm,xintne,wnss,wipros,unisysss,tibcs,techmahindras,tas,synes,sourcehovs,sabas,rmss,quickstars,quinnoxs,q3s,quickheals,ptcs,principals,polariss,news,netapps,logitechs,lions,icertiss,lines,ibms,hps,geometrics];
    
  
    return (
        <>
        <h1 className='row justify-content-center' style={{backgroundColor:'green', color: 'white'}}>OUR RECRUITMENT PARTNERS</h1>
      <div className='row justify-content-center' style={{ display: 'flex', flexWrap: 'wrap', height:"80px"}}>
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{ width: '100px', height: '100px', margin: '5px',border: '2px solid black', padding:'10px', borderRadius: '9px' }}/>
        ))}
      </div>
        </>
    )        
        }

export default Companies;