import Image from "next/image";

function Header() {
  return (
    <div>
      {/** Top NAV */}
      <div>
        <div>
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
          />
        </div>
      </div>

      {/**Bottom NAV */}
      <div></div>
    </div>
  );
}

export default Header;
