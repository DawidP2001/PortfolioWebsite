import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({className}) => {
  const [showLicenses, setShowLicenses] = React.useState(false);
  return (
    <footer className={"w-full bg-gray-700 text-center p-3 text-sm " + className}>
        Click Here to view the licenses for the different icons used in this website:
        <button className="underline ml-2" onClick={() => setShowLicenses(!showLicenses)}> {showLicenses ? "Hide Licenses" : "Show Licenses"} </button>
        {showLicenses && 
        <div className="flex flex-col space-y-1 mt-2 text-sm">
        <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Febrian Hidayat - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Kiranshastry - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/neural-network" title="neural network icons">Neural network icons created by Paul J. - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/direction" title="direction icons">Direction icons created by Erix - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/docker" title="docker icons">Docker icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/letter-c" title="letter-c icons">Letter-c icons created by Hight Quality Icons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/c-sharp" title="c sharp icons">C sharp icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by kliwir art - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/sql" title="sql icons">Sql icons created by Smashicons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/asm" title="asm icons">Asm icons created by JunGSa - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/aws" title="aws icons">Aws icons created by JunGSa - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a>
        </div>
        }
    </footer>
  );
};

export default Footer;