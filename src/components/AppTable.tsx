import React from 'react';

interface TableRow {
    feature: string;
    metric: string;
    inch: string;
}

interface TableSectionProps {
    title: string;
    rows: TableRow[];
    note?: string; // note isteğe bağlı
}

const AppTable: React.FC<TableSectionProps> = ({ title, rows, note }) => {
    return (
        <div className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>
            <table className="w-full border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-2">Özellik</th>
                        <th className="border p-2">Metric</th>
                        <th className="border p-2">Inch</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="border p-2">{row.feature}</td>
                            <td className="border p-2">{row.metric}</td>
                            <td className="border p-2">{row.inch}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {note && <p className="mt-2 text-sm">{note}</p>}
        </div>
    );
};

export default AppTable;
