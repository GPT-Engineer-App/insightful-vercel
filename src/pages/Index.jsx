import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Vercel Analytics Dashboard</h1>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12,345</p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Unique Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">8,765</p>
                <Progress value={60} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">33%</p>
                <Progress value={33} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="details">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Total Visits</TableCell>
                <TableCell>12,345</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Unique Visitors</TableCell>
                <TableCell>8,765</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bounce Rate</TableCell>
                <TableCell>33%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;