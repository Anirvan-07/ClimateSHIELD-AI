import { useState } from "react";
import { useStorm } from "../../context/StormContext";

export default function QAPanel() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const { fetchAnalysis } = useStorm();

    async function runAnalysis() {
        setLoading(true);

        const data = await fetchAnalysis();

        if (data) {
            setResult(data);
        }

        setLoading(false);
    }

    return (
        <div className="panel">
            <h3>AI Advisory</h3>

            <button
                onClick={runAnalysis}
                disabled={loading}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px",
                    cursor: "pointer",
                }}
            >
                {loading ? "Running AI..." : "Run AI Analysis"}
            </button>

            {result ? (
                <>
                    <p><b>Storm:</b> {result.analysis.storm}</p>

                    <p><b>Category:</b> {result.analysis.category}</p>

                    <p><b>Wind:</b> {result.analysis.wind_speed}</p>

                    <p><b>ETA:</b> {result.forecast.eta}</p>

                    <p><b>Confidence:</b> {result.forecast.confidence}%</p>

                    <hr />

                    <p>{result.advisory}</p>
                </>
            ) : (
                <p>Click the button to run the AI multi-agent workflow.</p>
            )}
        </div>
    );
}