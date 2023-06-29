const NFTSnapshot = require('../model/NFTSnapshot');
const User = require('../model/User'); // Replace with the correct path to your User model file


module.exports = {
  storeNFTSnapshot: async (req, res) => {
    try {
      const { firstname, timestamp, data, name, description } = req.body.nft;

      const snapshot = new NFTSnapshot({
        firstname,
        timestamp,
        data,
        name,
        description,
      });

      await snapshot.save();

      res.status(200).json({ message: 'NFT snapshot stored successfully' });
    } catch (error) {
      console.error('Error storing NFT snapshot:', error);
      res.status(500).json({ error: 'Failed to store NFT snapshot' });
    }
  },

  deleteNFTSnapshot: async (req, res) => {
    try {
      const snapshotId = req.params._id;
  
      // Delete the snapshot by _id
      const result = await NFTSnapshot.deleteOne({ _id: snapshotId });
  
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'NFT snapshot deleted successfully' });
      } else {
        res.status(404).json({ error: 'NFT snapshot not found' });
      }
    } catch (error) {
      console.error('Error deleting NFT snapshot:', error);
      res.status(500).json({ error: 'Failed to delete NFT snapshot' });
    }
  },
  

  getNFTSnapshotList: async (req, res) => {
    try {
      const snapshots = await NFTSnapshot.find();
  
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Pragma', 'no-cache');
      res.status(200).json({ snapshots });
    } catch (error) {
      console.error('Error retrieving NFT snapshots:', error);
      res.status(500).json({ error: 'Failed to retrieve NFT snapshots' });
    }
  },

  getNFTCount:  async (req, res) => {
    try {
      // Fetch all the NFT snapshots
      const snapshots = await NFTSnapshot.find().populate('user');
  
      res.status(200).json({ snapshots });
    } catch (error) {
      console.error('Error fetching NFT data:', error);
      res.status(500).json({ error: 'Failed to fetch NFT data' });
    }
  }
  
  
  
  
  
  
  


  
};


