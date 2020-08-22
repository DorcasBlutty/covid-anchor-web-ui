function Case({ caseData }) {
  { "caseData" }
  return (
    <div className="case">
      <h2>{caseData.country}</h2>
      <p>Total Cases{caseData.cases}</p>
      <p>Active Cases{caseData.active}</p>
      <p>Recovered Cases{caseData.recovered}</p>
      <p>Death Caes{caseData.deaths}</p>

      {/* STYLING */}
      <style jsx>{`
        
        .case{
          height:30rem;
          padding:3rem;
         display:grid;
         gap:4rem;
         backround-color:var(--color-primary);
         
        }


        {/* .content{
        
          color:red;
          width:100%;
          height:100%;
          padding:4rem */}
        }
        `}</style>

    </div>
  );
}

export default Case;
