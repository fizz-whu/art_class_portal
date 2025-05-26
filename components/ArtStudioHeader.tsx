import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
// import { useNavigation } from '@react-navigation/native'; // No longer needed
import { Link } from 'expo-router';

// SVG content for the logo
const logoSvgXml = `
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" 
    fill="currentColor" 
  />
</svg>
`;

const ArtStudioHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoTitleContainer}>
        <View style={styles.logoContainer}>
          <SvgXml xml={logoSvgXml} width="100%" height="100%" color="#0d141c" />
        </View>
        <Text style={styles.titleText}>Art Studio</Text>
      </View>
      <View style={styles.navContainer}>
        <Link href="http://localhost:8081" asChild> 
          <TouchableOpacity>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/explore" asChild>
          <TouchableOpacity>
            <Text style={styles.navText}>Classes</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity onPress={() => console.log('Gallery pressed')}>
          <Text style={styles.navText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('About pressed')}>
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Contact pressed')}>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.enrollButton} onPress={() => console.log('Enroll Now pressed')}>
        <Text style={styles.enrollButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Platform.OS === 'web' ? 40 : 10, // px-10 equivalent for web, smaller for mobile
    paddingVertical: 12, // py-3
    borderBottomWidth: 1,
    borderBottomColor: '#e7edf4',
    backgroundColor: '#f8fafc', // bg-slate-50 (approximate)
  },
  logoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16, // gap-4
  },
  logoContainer: {
    width: 16, // size-4
    height: 16, // size-4
  },
  titleText: {
    color: '#0d141c',
    fontSize: 18, // text-lg
    fontWeight: 'bold', // font-bold
    lineHeight: 24, // leading-tight (approximate)
    letterSpacing: -0.015 * 18, // tracking-[-0.015em]
  },
  navContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    gap: Platform.OS === 'web' ? 32 : 16, // gap-8 for web, smaller for mobile
    marginRight: Platform.OS === 'web' ? 32 : 16, // to make space for the button
  },
  navText: {
    color: '#0d141c',
    fontSize: 14, // text-sm
    fontWeight: '500', // font-medium
    lineHeight: 20, // leading-normal (approximate)
  },
  enrollButton: {
    minWidth: 84,
    maxWidth: 480,
    height: 40, // h-10
    paddingHorizontal: 16, // px-4
    backgroundColor: '#3d98f4',
    borderRadius: 8, // rounded-lg
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  enrollButtonText: {
    color: '#f8fafc', // text-slate-50 (approximate)
    fontSize: 14, // text-sm
    fontWeight: 'bold', // font-bold
    lineHeight: 20, // leading-normal (approximate)
    letterSpacing: 0.015 * 14, // tracking-[0.015em]
  },
});

export default ArtStudioHeader;