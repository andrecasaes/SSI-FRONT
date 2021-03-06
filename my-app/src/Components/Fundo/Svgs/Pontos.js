import * as React from "react"

import styled from "styled-components";



const SvgFill = styled.div`


    height:vw;
    width:auto;
    transform: scale(0.7);

`;




function SvgComponent({color1,color2,color3}) {
  return (
    <SvgFill>
    <svg  viewBox="1 -4 512 511">
      <path
        d="M321.086 78.602c0 38.34-31.082 69.421-69.426 69.421-38.34 0-69.422-31.082-69.422-69.421 0-38.34 31.082-69.422 69.422-69.422 38.344 0 69.426 31.082 69.426 69.422zm0 0"
        fill={color1}
      />
      <path
        d="M329.762 434.398c0 38.34-31.082 69.422-69.422 69.422-38.344 0-69.426-31.082-69.426-69.422 0-38.343 31.082-69.425 69.426-69.425 38.34 0 69.422 31.082 69.422 69.425zm0 0"
        fill={color2}
      />
      <path
        d="M329.762 252.16c0 38.344-31.082 69.426-69.422 69.426-38.344 0-69.426-31.082-69.426-69.426 0-38.34 31.082-69.422 69.426-69.422 38.34 0 69.422 31.082 69.422 69.422zm0 0"
        fill={color3}
      />
      <path
        d="M512 69.922c0 38.344-31.082 69.426-69.422 69.426-38.344 0-69.426-31.082-69.426-69.426C373.152 31.582 404.234.5 442.578.5 480.918.5 512 31.582 512 69.922zm0 0"
        fill={color1}
      />
      <path
        d="M512 434.398c0 38.34-31.082 69.422-69.422 69.422-38.344 0-69.426-31.082-69.426-69.422 0-38.343 31.082-69.425 69.426-69.425 38.34 0 69.422 31.082 69.422 69.425zm0 0"
        fill={color2}
      />
      <path
        d="M512 252.16c0 38.344-31.082 69.426-69.422 69.426-38.344 0-69.426-31.082-69.426-69.426 0-38.34 31.082-69.422 69.426-69.422 38.34 0 69.422 31.082 69.422 69.422zm0 0"
        fill={color3}
      />
      <path
        d="M138.848 78.602c0 38.34-31.082 69.421-69.426 69.421C31.082 148.023 0 116.941 0 78.602 0 40.262 31.082 9.18 69.422 9.18c38.344 0 69.426 31.082 69.426 69.422zm0 0"
        fill={color1}
      />
      <path
        d="M147.527 434.398c0 38.34-31.086 69.422-69.425 69.422-38.34 0-69.422-31.082-69.422-69.422 0-38.343 31.082-69.425 69.422-69.425 38.34 0 69.425 31.082 69.425 69.425zm0 0"
        fill={color2}
      />
      <path
        d="M147.527 252.16c0 38.344-31.086 69.426-69.425 69.426-38.34 0-69.422-31.082-69.422-69.426 0-38.34 31.082-69.422 69.422-69.422 38.34 0 69.425 31.082 69.425 69.422zm0 0"
        fill={color3}
      />
    </svg>
    </SvgFill> 
  )
}

export default SvgComponent
