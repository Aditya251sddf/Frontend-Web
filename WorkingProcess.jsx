import { useState } from "react";

export default function WorkingProcess() {
  const [open, setOpen] = useState(1);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10">
        Working Process
      </h2>

      <div className="space-y-4">
        {/* Step 01 */}
        <div
          onClick={() => setOpen(1)}
          className={`cursor-pointer border rounded-2xl p-6 flex justify-between items-center ${
            open === 1 ? "bg-lime-300" : ""
          }`}
        >
          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold">01</span>
            <h3 className="text-xl font-semibold">
              Consultation
            </h3>
          </div>
          <span className="text-2xl font-bold">
            {open === 1 ? "−" : "+"}
          </span>
        </div>

        {/* Step 02 */}
        <div
          onClick={() => setOpen(2)}
          className={`cursor-pointer border rounded-2xl p-6 flex justify-between items-center ${
            open === 2 ? "bg-lime-300" : ""
          }`}
        >
          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold">02</span>
            <h3 className="text-xl font-semibold">
              Research and Strategy Development
            </h3>
          </div>
          <span className="text-2xl font-bold">
            {open === 2 ? "−" : "+"}
          </span>
        </div>
      </div>
    </section>
  );
}

