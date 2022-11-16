import Image from "next/image";

export default function Gambar() {
  return (
    <>
      <Image
        src={"/images/rumah.png"}
        // Ukuran yang diinginkan dengan rasio aspek yang benar
        height={144}
        width={144}
        alt="Rumah"
      />
    </>
  );
}
