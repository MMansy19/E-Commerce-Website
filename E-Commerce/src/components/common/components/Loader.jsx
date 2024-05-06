import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={330}
    viewBox="0 0 300 330"
    backgroundColor="#f0f0f0"
    foregroundColor="#ffffff"
    {...props}
  >
    <circle cx="20" cy="274" r="8" />
    <circle cx="20" cy="294" r="8" />
    <rect x="42" y="290" rx="5" ry="5" width="61" height="8" />
    <circle cx="20" cy="313" r="8" />
    <rect x="41" y="308" rx="5" ry="5" width="220" height="10" />
    <rect x="16" y="9" rx="0" ry="0" width="261" height="251" />
    <rect x="117" y="290" rx="5" ry="5" width="61" height="8" />
    <rect x="43" y="270" rx="5" ry="5" width="90" height="8" />
    <rect x="145" y="270" rx="5" ry="5" width="64" height="8" />
    <rect x="220" y="270" rx="5" ry="5" width="47" height="8" />
  </ContentLoader>
);

export default Loader;
