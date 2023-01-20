import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import FeedbackData from '../data/FeedbackData';
import FeedbackList from '../components/FeedbackList.jsx';
import Card from '../components/shared/Card.jsx';
import FeedbackStats from '../components/FeedbackStats';

export default function Home() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Head>
        <title>yesweb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="container">
          <Card reverse>
            <h2>This is a Card Component</h2>
          </Card>
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </main>
    </>
  );
}
