import { wedding } from "@/lib/wedding";

export function Footer() {
  return (
    <footer className="foot">
      <p className="foot-love">with love</p>
      <p className="foot-names">
        {wedding.groom.first} & {wedding.bride.first}
      </p>
      <p className="foot-bless">{wedding.blessing}</p>
    </footer>
  );
}
