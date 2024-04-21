import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function FormulaireRefuge() {
  const [refugeData, setRefugeData] = useState({
    nom: '',
    adresse: '',
    telephone: '',
    email: '',
    siret: '',
    responsable: '',
    fonction: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRefugeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refugeData);
  };

  const labelStyle = {
    color: 'var(--Vert-Fonc, #1F330A)',
    fontFamily: 'Outfit',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
  };

  const inputStyle = {
    borderRadius: '6px',
    border: '3px solid var(--Beige-Fonc, #897F66)',
    background: 'rgba(234, 227, 211, 0.50)',
    width: '100%', 
    marginBottom: '10px',
    padding: '10px'
  };

  const h2Style = {
    color: 'var(--Vert-Medium, #8E9D65)',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: '"Nunito Sans"',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal'
  };

  return (
    <div>
      <h2 style={h2Style}>Informations Générales du Refuge</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Nom du refuge:
          <input 
            type="text" 
            name="nom" 
            value={refugeData.nom} 
            onChange={handleChange} 
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Adresse du Refuge:
          <input 
            type="text" 
            name="adresse" 
            value={refugeData.adresse} 
            onChange={handleChange} 
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Numéro de téléphone:
          <input 
            type="text" 
            name="telephone" 
            value={refugeData.telephone} 
            onChange={handleChange} 
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Adresse email du Refuge:
          <input 
            type="email" 
            name="email" 
            value={refugeData.email} 
            onChange={handleChange} 
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Numéro de Siret:
          <input 
            type="text" 
            name="siret" 
            value={refugeData.siret} 
            onChange={handleChange} 
            style={inputStyle}
          />
        </label>
        <h2 style={h2Style}>Informations sur le contact Principal</h2>
        <label style={labelStyle}>
          Nom du responsable:
          <input 
            type="text" 
            name="responsable" 
            value={refugeData.responsable} 
            onChange={handleChange} 
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Fonction:
          <input 
            type="text" 
            name="fonction" 
            value={refugeData.fonction} 
            onChange={handleChange} 
            style={inputStyle}
          />
        </label>
        <Link to="/Verification">
        <button type="submit" style={{...inputStyle, marginTop: '20px', width: '100%', borderRadius: '16px', color: '#897F66',backgroundColor: '#EAE3D3',border: '2px solid #897F66',}}>Suivant</button>
        </Link>
      </form>
    </div>
  );
}

export default FormulaireRefuge;

