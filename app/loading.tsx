import Image from "next/image";
import loader from "@/assets/loader.gif";
function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100hv",
        width: "100vw",
      }}
    >
      <Image
        src={loader}
        height={150}
        width={150}
        alt="Loading"
        style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
      />
    </div>
  );
}
export default LoadingPage;
