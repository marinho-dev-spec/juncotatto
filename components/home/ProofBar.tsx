import CountUp from '@/components/common/CountUp';

export default function ProofBar() {
  return (
    <section className="proof-bar">
      <div className="container">
        <div className="proof-items">
          <div className="proof-item">
            <span className="proof-number">
              <CountUp end={4.9} decimals={1} />
            </span>
            <span className="proof-text">★ no Google</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">
              <CountUp end={600} prefix="+" />
            </span>
            <span className="proof-text">avaliações</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">
              <CountUp end={2016} grouping={false} />
            </span>
            <span className="proof-text">desde então</span>
          </div>
          <div className="proof-item">
            <span className="proof-number">
              <CountUp end={100} suffix="%" />
            </span>
            <span className="proof-text">material descartável</span>
          </div>
        </div>
      </div>
    </section>
  );
}
