import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function useGif(tag = '') {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchGif = useCallback(async () => {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}${tag ? `&tag=${tag}` : ''}`;

    try {
      const { data } = await axios.get(url);
      const imageUrl = data.data.images.downsized_large.url;
      setGif(imageUrl);
    } catch (error) {
      console.error('Error fetching GIF:', error);
    } finally {
      setLoading(false);
    }
  }, [tag]);

  useEffect(() => {
    fetchGif();
  }, [fetchGif]);

  return { gif, loading, fetchGif };
}

export default useGif;
