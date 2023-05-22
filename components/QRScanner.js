// import React, { useState } from 'react';

// import { QrReader } from 'react-qr-reader';

// const QRScanner = () => {
//   const [result, setResult] = useState('');

//   const handleScan = (data) => {
//     if (data) {
//       setResult(data);
//     }
//   }

//   const handleError = (err) => {
//     console.error(err);
//   }

//   return (
//     <div>
//       <h1>QR Code Scanner</h1>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '300px', margin: '0 auto' }}
//       />
//       <p>{result}</p>
//     </div>
//   );
// }

// export default QRScanner;
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/router";
import { useState } from "react";
const QRScanner = () => {
  const [isDetected, setIsDetected] = useState(false);
  const router = useRouter();

  const handleRes = (res) => {
    alert("Ok");
    setIsDetected(true);
    router.push("/blogs");
  };

  const toFormasi = () => {
    router.push("/Scanner");
  };

  const myStyle = {
    height: "500px",
  };

  return (
    <div>
      <button onClick={toFormasi}>Formasi</button>
      {!isDetected && (
        <QrScanner
          style={myStyle}
          onResult={(result) => handleRes()}
          onDecode={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
        />
      )}
    </div>
  );
};

export default QRScanner;
