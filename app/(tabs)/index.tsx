import { Platform, StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import ArtStudioHeader from '@/components/ArtStudioHeader';

// Import your local images using relative paths
// import CommunityAwardLogo from '../../assets/images/community_award.png'; 
// import CreativeExcellenceAwardLogo from '../../assets/images/creative_excellence_award.png'; 
// import TopArtSchoolAwardLogo from '../../assets/images/top_art_school_award.png'; 

export default function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <ArtStudioHeader />
      <ScrollView style={styles.contentContainer}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALWZ1jG1NHneLI74dkwIjTCtRtnnI9Da9r7P4e83TF639JWFBASftVM-X-KyR6Quyxl0aH7P6ZyREttCHHuJwOGlYtCYqWmJ49MKhnZKs6KvI5ZlGobPn5EVBxpzR5In5dqIzXAe0x75I7K3Bi0E_YShG-wQD4m8ZhZGsIlTzuiHz1wV3LEu4cdjf-ZT9AKGHQVwks2_5aSUNMMw3oVrzu6PRQwfi7eY6ewag_frvlW-sV9Ga_X0t5swQl3hexG6matvsnDoR-s-6c' }} 
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroText}>Inspiring Creativity, One Brushstroke at a Time</Text>
          </View>
        </View>

        <Text style={styles.galleryTitle}>Student Gallery</Text>
        {/* Gallery Grid */}
        <View style={styles.galleryGrid}>
          {/* Example Gallery Item 1 */}
          <View style={styles.galleryItemContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATDxQ4Zxp4eNphYrX1iZHf2IhdJ0eJaEx1rDgLVf9HnzgDxoJ_YMzzsiUUIK17KGSNRJYXCQYYrSQUo13G19JpGMQm_kqvJPJItYXubBxQO97VtHk2-uE80INDJ8yF_NkCJHLo80uvrChs_BdDMNfuy24OpC0I3AMAp0591BGHT2A_IWh6yktNjC4LK8-pePqGchi6VEg67-yEGGmKzbm5NlLMDoft9BqmpEJTwqWTKZd1LyAwtG4lBs_oXb2wsQT0_UTSlXywL2eN' }} 
              style={styles.galleryItemImage}
              resizeMode="cover"
            />
            <Text style={styles.galleryItemTitle}>Vibrant Still Life</Text>
            <Text style={styles.galleryItemSubtitle}>Oil on canvas</Text>
          </View>
          
          {/* Example Gallery Item 2 */}
          <View style={styles.galleryItemContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9n2Guk9JD3txC7K2fLeLPEMjRuAWmpcEbL9YxykmqFLdh5ywyLwmKUDljJxyVgXQBhRXzDCvyIfO4EVzjwMLgTH6DNP-RyLbL7hLSnTNBH9WI4c3i96tV-7x5sf0WOPAAIjz8nIgXU2e63_uMZaz56zKXmiIfWfyRvvpvqUlT-pm-xY17DUzZ8-pB8qYXNqudZF4JXhp2dqiGy8STG5GIcTzjINQhqf-2sobKv_V30a5H8ta4NrUM0mLpUUWgg3fl_8gnVG-K7E60' }} 
              style={styles.galleryItemImage}
              resizeMode="cover"
            />
            <Text style={styles.galleryItemTitle}>Expressive Portrait</Text>
            <Text style={styles.galleryItemSubtitle}>Charcoal on paper</Text>
          </View>

          {/* Example Gallery Item 3 */}
          <View style={styles.galleryItemContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYn-gyQJE626gB_15utusB7SGB9ce_xioYYhXnzEqE2lMzWOxabUM44yCjwlee8JPUD3dvmx7IbzBiSqBB1sCis_z0fn-Dvwpp-pYfUUR-L_6K76y7XOJjnBYxpOHEMR3bYvAoy-0II1wVUtqgeNWAX5Ji1fyY0MxZ-vcMkzAWDSkVKRt-ikeGCgR3DrTHIBFtjocPvkFyokywY_K876MCr-ozkWajl9xcDczFmF75hjHdeFJ6Nlr_kQ-kTeD0uw5dLzyMrolyP9OP' }} 
              style={styles.galleryItemImage}
              resizeMode="cover"
            />
            <Text style={styles.galleryItemTitle}>Abstract Landscape</Text>
            <Text style={styles.galleryItemSubtitle}>Acrylic on canvas</Text>
          </View>
          {/* Add more gallery items here if needed */}
        </View>

        {/* Awards and Recognition Section */}
        <View style={styles.awardsSection}>
          <Text style={styles.awardsTitle}>Awards and Recognition</Text>
          <View style={styles.awardsGrid}>
            <View style={styles.awardItem}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/100x80.png?text=Community+Award' }} 
                style={styles.awardLogo}
                resizeMode="contain"
              />
              <Text style={styles.awardText}>Best Community Art Program 2023</Text>
            </View>
            <View style={styles.awardItem}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/100x80.png?text=Creative+Excellence' }} 
                style={styles.awardLogo}
                resizeMode="contain"
              />
              <Text style={styles.awardText}>Creative Excellence Award 2022</Text>
            </View>
            <View style={styles.awardItem}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/100x80.png?text=Top+Art+School' }} 
                style={styles.awardLogo}
                resizeMode="contain"
              />
              <Text style={styles.awardText}>Top Art School - Regional Choice</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8fafc', // From original body bg-slate-50
  },
  contentContainer: {
    flex: 1,
    // Original HTML had px-40 for the outer layout container
    // This is a large padding for mobile, so we adjust
    paddingHorizontal: Platform.OS === 'web' ? 160 : 20, 
  },
  heroSection: {
    minHeight: 320, // From original min-h-80 (80 * 4px)
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: Platform.OS === 'web' ? 8 : 0, // @[480px]:rounded-lg
    marginTop: 20, // From original py-5 (approximate)
    marginBottom: 20,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  heroTextContainer: {
    padding: 16, // From original p-4
    // The original CSS had a gradient: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%)
    // For simplicity, using a solid background. For a gradient, use 'expo-linear-gradient'.
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  heroText: {
    color: 'white',
    fontSize: 28, // From original text-[28px]
    fontWeight: 'bold',
    lineHeight: 32, // Approximate for leading-tight
    // letterSpacing for 'tracking-light' is usually small or default
  },
  galleryTitle: {
    color: '#0d141c',
    fontSize: 22, // From original text-[22px]
    fontWeight: 'bold',
    lineHeight: 28, // Approximate for leading-tight
    letterSpacing: -0.015 * 22, // From original tracking-[-0.015em]
    paddingHorizontal: 16, // From original px-4 on the title itself
    paddingBottom: 12, // From original pb-3
    paddingTop: 20, // From original pt-5
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between', // Or 'space-around' depending on desired spacing
    gap: 12, // From original gap-3 (3 * 4px)
    padding: 16, // From original p-4
  },
  galleryItemContainer: {
    // For grid-cols-[repeat(auto-fit,minmax(158px,1fr))]
    // We'll make items take up a percentage of width to be responsive.
    // On web, maybe 3 columns, on mobile, 2 columns.
    width: Platform.OS === 'web' ? '31%' : '48%', // Adjust for gap and desired columns
    marginBottom: 12, // To add space between rows since we are using flexWrap
    // gap: 12, // gap-3 (already applied to parent galleryGrid for inter-item spacing)
    // paddingBottom: 12, // pb-3 (applied via marginBottom now)
  },
  galleryItemImage: {
    width: '100%',
    aspectRatio: 1, // aspect-square
    borderRadius: 8, // rounded-lg
    backgroundColor: '#e2e8f0', // Placeholder background for images
  },
  galleryItemTitle: {
    color: '#0d141c',
    fontSize: 16, // text-base
    fontWeight: '500', // font-medium
    lineHeight: 24, // leading-normal (approximate)
    marginTop: 8, // Spacing between image and text (approximating gap-3 from original inner flex)
  },
  galleryItemSubtitle: {
    color: '#49739c',
    fontSize: 14, // text-sm
    fontWeight: '400', // font-normal
    lineHeight: 20, // leading-normal (approximate)
  },
  awardsSection: {
    marginTop: 30, // Add some space above the awards section
    paddingBottom: 20, // Add some space below the awards section
  },
  awardsTitle: {
    color: '#0d141c',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
    letterSpacing: -0.015 * 22,
    paddingHorizontal: 16,
    marginBottom: 15, // Space between title and awards grid
    textAlign: Platform.OS === 'web' ? 'left' : 'center',
  },
  awardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Distribute award items
    gap: 16, // Spacing between award items
    paddingHorizontal: 16,
  },
  awardItem: {
    alignItems: 'center', // Center content of each award item
    width: Platform.OS === 'web' ? '30%' : '45%', // Adjust for desired columns
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#ffffff', // Optional: give a background to award items
    borderRadius: 8, // Optional: round corners of award items
    borderWidth: 1, // Optional: add a border
    borderColor: '#e2e8f0', // Optional: border color
  },
  awardLogo: {
    width: 100,
    height: 80,
    marginBottom: 8,
    // backgroundColor: '#f0f0f0', // Ensure this is commented out or removed if using actual images
  },
  awardText: {
    color: '#334155', // Slightly darker text for awards
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
});
