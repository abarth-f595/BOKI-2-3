import { calculatorProblems } from "@/data/calculator";
import { notFound } from "next/navigation";
import CalculatorClient from "@/components/CalculatorClient";

export default async function CalculatorProblemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = calculatorProblems.find((p) => p.id === id);

  if (!problem) notFound();

  return (
    <div className="max-w-6xl mx-auto">
      <CalculatorClient problem={problem} />
    </div>
  );
}
