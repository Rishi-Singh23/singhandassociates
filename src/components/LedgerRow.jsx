// A ledger-entry styled stat row — the site's signature motif, echoing an
// actual accounting ledger line (entry no. / figure / description).
export default function LedgerRow({ entries }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {entries.map((e, i) => (
        <div
          key={e.label}
          className="grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[4rem_1fr_auto] items-baseline gap-4 py-4"
        >
          <span className="font-body text-xs text-slate tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm sm:text-base text-charcoal">{e.label}</span>
          <span className="font-display text-2xl sm:text-3xl text-ink tabular-nums">
            {e.value}
          </span>
        </div>
      ))}
    </div>
  );
}
