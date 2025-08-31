import React, { useState } from 'react';

function VoteLangage() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (languageName) => {
    setLanguages(prevLanguages =>
      prevLanguages.map(language =>
        language.name === languageName
          ? { ...language, votes: language.votes + 1 }
          : language
      )
    );
  };

  const styleTitre = {
    fontSize: '36px',
    marginTop: '50px',
    fontWeight: 'bold',
    color: '#333',
  };

  const styleParagraph = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginTop: "10px"
  };

  const styleButton = {
    backgroundColor: "#f0e1b1", 
    color: "#388e3c",
    padding: "15px 25px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    width: "200px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  };

  const styleLangContainer = {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#ffebcd",
    border: "1px solid #222",
    margin: "10px 0",
    width: "80%",
    borderRadius: "10px",
    textAlign: "center",
    marginLeft: "10%"
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{ textAlign: "center", width: "70%" }}>
        <h1 style={styleTitre}>Vote for your favorite programming language!</h1>
        {languages.map((language) => (
          <div key={language.name} style={styleLangContainer}>
            <p style={styleParagraph}>{language.name}: {language.votes} votes</p>
            <button style={styleButton} onClick={() => handleVote(language.name)}>
              Vote Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoteLangage;
