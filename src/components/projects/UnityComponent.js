import React, {Fragment} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


function Sudoku() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/portfolio/build/sudoku.loader.js",
    dataUrl:  "/portfolio/build/sudoku.data",
    frameworkUrl:  "/portfolio/build/sudoku.framework.js",
    codeUrl:  "/portfolio/build/sudoku.wasm",
  });

  return <Fragment>
        {unityProvider && (<Unity unityProvider={unityProvider} 
            style={{ 
                width: '400px',
                height: '400px',
                borderRadius: '10px'
            }}/>)}
            <div style={{width: '400px', textAlign: 'center'}}><a href="https://github.com/halleking/Sudoku.git" target="blank">Sudoku GitHub Repo</a></div>
    </Fragment>;
}

export default Sudoku;