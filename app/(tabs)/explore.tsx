import React from 'react';
import { Platform, StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import ArtStudioHeader from '@/components/ArtStudioHeader';

export default function ClassesScreen() {
  return (
    <View style={styles.screenContainer}>
      <ArtStudioHeader />
      <ScrollView style={styles.contentContainer}>
        {/* Page Header */}
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Our Art Classes</Text>
          <Text style={styles.pageSubtitle}>Discover your creative potential with our diverse range of art classes</Text>
        </View>

        {/* Classes Grid */}
        <View style={styles.classesGrid}>
          {/* Painting Class */}
          <View style={styles.classCard}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATDxQ4Zxp4eNphYrX1iZHf2IhdJ0eJaEx1rDgLVf9HnzgDxoJ_YMzzsiUUIK17KGSNRJYXCQYYrSQUo13G19JpGMQm_kqvJPJItYXubBxQO97VtHk2-uE80INDJ8yF_NkCJHLo80uvrChs_BdDMNfuy24OpC0I3AMAp0591BGHT2A_IWh6yktNjC4LK8-pePqGchi6VEg67-yEGGmKzbm5NlLMDoft9BqmpEJTwqWTKZd1LyAwtG4lBs_oXb2wsQT0_UTSlXywL2eN' }} 
              style={styles.classImage}
              resizeMode="cover"
            />
            <View style={styles.classContent}>
              <Text style={styles.classTitle}>Oil Painting Fundamentals</Text>
              <Text style={styles.classDescription}>Learn the basics of oil painting with professional techniques and color theory.</Text>
              <View style={styles.classDetails}>
                <Text style={styles.classPrice}>$120/month</Text>
                <Text style={styles.classDuration}>8 weeks</Text>
              </View>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Drawing Class */}
          <View style={styles.classCard}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9n2Guk9JD3txC7K2fLeLPEMjRuAWmpcEbL9YxykmqFLdh5ywyLwmKUDljJxyVgXQBhRXzDCvyIfO4EVzjwMLgTH6DNP-RyLbL7hLSnTNBH9WI4c3i96tV-7x5sf0WOPAAIjz8nIgXU2e63_uMZaz56zKXmiIfWfyRvvpvqUlT-pm-xY17DUzZ8-pB8qYXNqudZF4JXhp2dqiGy8STG5GIcTzjINQhqf-2sobKv_V30a5H8ta4NrUM0mLpUUWgg3fl_8gnVG-K7E60' }} 
              style={styles.classImage}
              resizeMode="cover"
            />
            <View style={styles.classContent}>
              <Text style={styles.classTitle}>Portrait Drawing</Text>
              <Text style={styles.classDescription}>Master the art of portrait drawing with charcoal and graphite techniques.</Text>
              <View style={styles.classDetails}>
                <Text style={styles.classPrice}>$100/month</Text>
                <Text style={styles.classDuration}>6 weeks</Text>
              </View>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Abstract Art Class */}
          <View style={styles.classCard}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYn-gyQJE626gB_15utusB7SGB9ce_xioYYhXnzEqE2lMzWOxabUM44yCjwlee8JPUD3dvmx7IbzBiSqBB1sCis_z0fn-Dvwpp-pYfUUR-L_6K76y7XOJjnBYxpOHEMR3bYvAoy-0II1wVUtqgeNWAX5Ji1fyY0MxZ-vcMkzAWDSkVKRt-ikeGCgR3DrTHIBFtjocPvkFyokywY_K876MCr-ozkWajl9xcDczFmF75hjHdeFJ6Nlr_kQ-kTeD0uw5dLzyMrolyP9OP' }} 
              style={styles.classImage}
              resizeMode="cover"
            />
            <View style={styles.classContent}>
              <Text style={styles.classTitle}>Abstract Expressionism</Text>
              <Text style={styles.classDescription}>Explore creative freedom through abstract art and mixed media techniques.</Text>
              <View style={styles.classDetails}>
                <Text style={styles.classPrice}>$140/month</Text>
                <Text style={styles.classDuration}>10 weeks</Text>
              </View>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Watercolor Class */}
          <View style={styles.classCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/300x200.png?text=Watercolor+Class' }} 
              style={styles.classImage}
              resizeMode="cover"
            />
            <View style={styles.classContent}>
              <Text style={styles.classTitle}>Watercolor Landscapes</Text>
              <Text style={styles.classDescription}>Create beautiful landscape paintings using watercolor techniques and color blending.</Text>
              <View style={styles.classDetails}>
                <Text style={styles.classPrice}>$110/month</Text>
                <Text style={styles.classDuration}>7 weeks</Text>
              </View>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Digital Art Class */}
          <View style={styles.classCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/300x200.png?text=Digital+Art+Class' }} 
              style={styles.classImage}
              resizeMode="cover"
            />
            <View style={styles.classContent}>
              <Text style={styles.classTitle}>Digital Art & Design</Text>
              <Text style={styles.classDescription}>Learn digital illustration and design using professional software and tablets.</Text>
              <View style={styles.classDetails}>
                <Text style={styles.classPrice}>$160/month</Text>
                <Text style={styles.classDuration}>12 weeks</Text>
              </View>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sculpture Class */}
          <View style={styles.classCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/300x200.png?text=Sculpture+Class' }} 
              style={styles.classImage}
              resizeMode="cover"
            />
            <View style={styles.classContent}>
              <Text style={styles.classTitle}>Clay Sculpture</Text>
              <Text style={styles.classDescription}>Work with clay to create three-dimensional art pieces and learn sculpting fundamentals.</Text>
              <View style={styles.classDetails}>
                <Text style={styles.classPrice}>$130/month</Text>
                <Text style={styles.classDuration}>9 weeks</Text>
              </View>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Call to Action Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Start Your Artistic Journey?</Text>
          <Text style={styles.ctaDescription}>Join our community of artists and discover your creative potential</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>View All Classes</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Platform.OS === 'web' ? 40 : 20,
  },
  headerSection: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  pageTitle: {
    color: '#0d141c',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    letterSpacing: -0.015 * 32,
    textAlign: 'center',
    marginBottom: 12,
  },
  pageSubtitle: {
    color: '#49739c',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 600,
  },
  classesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
    paddingBottom: 40,
  },
  classCard: {
    width: Platform.OS === 'web' ? '48%' : '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  classImage: {
    width: '100%',
    height: 200,
  },
  classContent: {
    padding: 20,
  },
  classTitle: {
    color: '#0d141c',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
    marginBottom: 8,
  },
  classDescription: {
    color: '#49739c',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  classDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  classPrice: {
    color: '#0d141c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  classDuration: {
    color: '#49739c',
    fontSize: 14,
  },
  enrollButton: {
    backgroundColor: '#3d98f4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ctaSection: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaTitle: {
    color: '#0d141c',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaDescription: {
    color: '#49739c',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: '#3d98f4',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
