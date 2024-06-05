import { useRouter } from "next/navigation";

export default function SelectWalletBtn() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => router.push("/play")}
        className="px-6 py-3 bg-[#FCBA28] relative z-[5] rounded-full text-[#231F20] font-semibold mt-6 border border-[#231F20] rounded-md"
      >
        SELECT WALLET
      </button>
      <button
        onClick={() => router.push("/play")}
        className="px-6 py-3 bg-black -mt-12 relative z-[4] text-[#231F20] font-semibold border border-[#231F20] rounded-md"
      >
        Select Wallet
      </button>
    </div>
  );
}
