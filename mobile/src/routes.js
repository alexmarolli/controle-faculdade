import React, {useEffect, useState} from "react";

import {createNativeStackNavigator} from '@react-navigation/native';
import {navigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import login from "./pages/login";
import { UseSelector } from "react-redux";
import { UserService } from "./services";
import { Store } from "./store";

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();