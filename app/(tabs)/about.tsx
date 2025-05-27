import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import ArtStudioHeader from '@/components/ArtStudioHeader';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

// Configure the DynamoDB client
const client = new DynamoDBClient({
  region: "localhost",
  endpoint: "http://localhost:8000",
  credentials: { 
    accessKeyId: "dummyAccessKeyId",
    secretAccessKey: "dummySecretAccessKey",
  }
});
const docClient = DynamoDBDocumentClient.from(client);

export default function AboutScreen() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoursesInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        const command = new ScanCommand({
          TableName: "course", // Ensure this is your table name
        });
        const response = await docClient.send(command);
        setCourses(response.Items || []);
      } catch (err) {
        console.error("Error fetching data from DynamoDB:", err);
        setError("Failed to load courses. Please ensure local DynamoDB is running and the 'course' table exists.");
      }
      setLoading(false);
    };

    fetchCoursesInfo();
  }, []);

  const renderCourseItem = ({ item }: { item: any }) => {
    // Assuming the structure from your example where actual values are nested under S, BOOL, L, M, NULL etc.
    // The DynamoDBDocumentClient usually unmarshalls this for you, so `item` should have direct values.
    // If `item` still has the { "S": "value" } structure, you'd need to access item.courseId.S, item.Type.S etc.
    // For this example, I'm assuming the DocumentClient has already unmarshalled the data.

    const firstClass = item.Classes && item.Classes.length > 0 ? item.Classes[0] : null;
    const availableSeats = firstClass ? firstClass.Seats.filter((seat: any) => seat.Status === 'available').length : 0;
    const totalSeats = firstClass ? firstClass.Seats.length : 0;

    return (
      <View style={styles.courseItemContainer}>
        <Text style={styles.courseTitle}>Course ID: {item.courseId || 'N/A'}</Text>
        <Text style={styles.courseDetail}>Type: {item.Type || 'N/A'}</Text>
        <Text style={styles.courseDetail}>Active: {item.Active !== undefined ? String(item.Active) : 'N/A'}</Text>
        <Text style={styles.courseDetail}>Day: {item.DayInAWeek || 'N/A'}</Text>
        <Text style={styles.courseDetail}>Start Date: {item.StartDate || 'N/A'}</Text>
        <Text style={styles.courseDetail}>End Date: {item.EndDate || 'N/A'}</Text>
        {firstClass && (
          <View style={styles.classDetailsContainer}>
            <Text style={styles.subHeader}>First Class Session:</Text>
            <Text style={styles.courseDetail}>Date: {firstClass.Date || 'N/A'}</Text>
            <Text style={styles.courseDetail}>Time: {firstClass.StartTime || 'N/A'} - {firstClass.EndTime || 'N/A'}</Text>
            <Text style={styles.courseDetail}>Seats: {availableSeats} available / {totalSeats} total</Text>
            {/* You can further map over firstClass.Seats to display individual seat status if needed */}
          </View>
        )}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ArtStudioHeader />
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Courses...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ArtStudioHeader />
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ArtStudioHeader />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Available Courses</ThemedText>
      </ThemedView>
      {courses.length > 0 ? (
        <FlatList
          data={courses}
          renderItem={renderCourseItem}
          keyExtractor={(item) => item.courseId || Math.random().toString()} // Use courseId as key
          contentContainerStyle={styles.listContentContainer}
        />
      ) : (
        <View style={styles.centerContent}>
            <Text>No courses found in the 'course' table.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20, // Adjusted padding
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  courseItemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8, // Increased margin
  },
  courseDetail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4, // Adjusted margin
  },
  classDetailsContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});