// Next
import Link from 'next/link';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementCall } from '../redux/actions';

// Components
import Layout from '../components/Layout';

// Selectors
import { selectCounter } from '../redux/selectors';

const Index = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>
        Hello Next.js
        <span role="img" aria-label="Hand">
          👋
        </span>
      </h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <h2>{counter}</h2>
      <button type="button" className="btn btn-primary" onClick={() => dispatch(increment())}>
        Inc
      </button>
      <button type="button" className="btn btn-primary" onClick={() => dispatch(incrementCall())}>
        Inc Call
      </button>
    </Layout>
  );
};
export default Index;
