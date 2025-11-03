import { View, Text } from 'react-native';
import { styles } from '../assets/styles/home.styles.js';
import { COLORS } from '../constants/colours.js';

export const BalanceCard = ({ summary }) => {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>R{parseFloat(summary.balance || 0).toFixed(2)}</Text>
      <View style={styles.balanceStats}>
        <View style={[styles.balanceStatItem, styles.statDivider]}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, {color: COLORS.income}]}>
            +R{parseFloat(summary.income || 0).toFixed(2)}
          </Text>
        </View>
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Expenses</Text>
          <Text style={[styles.balanceStatAmount, {color: COLORS.expense}]}>
            R{Math.abs(parseFloat(summary.expense || 0)).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};